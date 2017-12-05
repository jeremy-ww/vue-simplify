import Vue from 'vue'
import {
  Alert,
  Button,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  Loading,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Option,
  Pagination,
  Select,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  TimePicker
} from 'element-ui'

[
  Alert,
  Button,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  Pagination,
  Select,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  TimePicker
].forEach(v => Vue.use(v))

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
