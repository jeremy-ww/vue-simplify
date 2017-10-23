<script>
import api from '@/common/api'

// support html column header
function renderHeader (h, { column }) {
  return h('span', {
    domProps: {
      innerHTML: column.label
    }
  })
}

export default {
  name: 'paged-table',

  props: {
    columns: {
      type: Array,
      default () { return [] }
    },

    api: String,

    height: [Number, String],

    params: Object,

    rowsPath: {
      type: String,
      default: 'data'
    },

    totalPath: {
      type: String,
      default: 'total'
    },

    size: {
      type: Number,
      default: 10
    },

    layout: {
      type: String,
      default: '->, total, sizes, prev, pager, next, jumper'
    },

    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 50, 100]
      }
    },

    emptyText: String
  },

  data () {
    return {
      loading: false,
      rows: [],
      total: 0,
      page: 1,
      response: {}
    }
  },

  computed: {
    queryParams () {
      return Object.assign({
        page: this.page,
        size: this.size
      }, this.params)
    }
  },

  watch: {
    'queryParams': {
      deep: true,
      handler: 'requestTableRows'
    }
  },

  methods: {
    requestTableRows () {
      if (!this.api) return
      this.loading = true
      return api.post(this.api, this.queryParams)
        .then((res = {}) => {
          this.loading = false
          this.rows = res[this.rowsPath] || []
          this.total = res[this.totalPath] || 0
          this.response = res
        }, _ => { this.loading = false })
    },

    // expose to external call
    refresh () {
      return this.requestTableRows()
    }
  },

  render (h) {
    const columnNodes = this.columns.map(column => {
      return h('el-table-column', {
        props: {
          label: column.label,
          prop: column.prop,
          minWidth: column.width,
          width: column.width,
          showOverflowTooltip: column.showTip,
          align: column.align,
          renderHeader
        },
        scopedSlots: column.scopedSlot && {
          default: column.scopedSlot
        }
      })
    })

    const tableNode = h('el-table', {
      props: {
        data: this.rows,
        height: this.height,
        border: true,
        emptyText: this.emptyText
      },
      directives: [
        {
          name: 'loading',
          value: this.loading
        }
      ]
    }, [columnNodes, this.$slots.default])

    const paginationNode = h('el-pagination', {
      props: {
        layout: this.layout,
        pageSizes: this.pageSizes,
        total: this.total,
        currentPage: this.page,
        pageSize: this.size
      },
      on: {
        'current-change': page => { this.page = page },
        'size-change': size => { this.size = size }
      }
    })

    const { $scopedSlots: { default: scopedSlots } } = this
    const pagedTableChildNode = [tableNode, paginationNode]
    if (scopedSlots) pagedTableChildNode.unshift(scopedSlots(this.response))
    return h('div', { staticClass: 'paged-table' }, pagedTableChildNode)
  },

  created () {
    this.requestTableRows()
  }
}
</script>

<style lang="scss">
.paged-table {
  .el-table {
    .cell {
      text-align: center;
    }
  }

  .el-loading-mask {
    background-color: rgba(255, 255, 255, .9);

    .el-loading-spinner .path {
      stroke: #20a0ff;
    }
  }
}
</style>
