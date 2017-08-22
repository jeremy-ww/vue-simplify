import Vue from 'vue'
import {
  Alert,
  Button,
  Table,
  Select,
  Option,
  Pagination,
  TableColumn,
  TimePicker,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  Switch,
  Tabs,
  TabPane,
  Loading,
  Message,
  MessageBox,
  Menu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

[
  Alert,
  Button,
  Table,
  Select,
  Option,
  Pagination,
  TableColumn,
  TimePicker,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  Switch,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  MenuItemGroup
].forEach(v => Vue.use(v))

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
