import Developing from '@/components/Developing'

export default [
  {
    path: '/',
    name: 'Developing',
    component: Developing
  },
  {
    path: '*',
    name: '404',
    props: { notice: '404' },
    component: Developing
  }
]
