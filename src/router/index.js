import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EditProfileView from '../views/customerViews/EditProfileView.vue'
import BankAccountListView from '../views/employeeViews/BankAccountListView.vue'
import UserListView from '../views/employeeViews/UserListView.vue'
import EditUserView from '../views/employeeViews/EditUserView.vue'
import EditBankAccountView from '../views/employeeViews/EditBankAccountView.vue'
import CustomerDashboardView from '../views/customerViews/CustomerDashboardView.vue'
import EmployeeDashboardView from '../views/employeeViews/EmployeeDashboardView.vue'
import MakeTransaction from '../components/transactions/MakeTransaction.vue'
import TransactionList from '../components/transactions/TransactionList.vue'
import SearchForIban from '../views/customerViews/SearchForIban.vue'
import EmployeeMakeTransaction from '../components/transactions/EmployeeMakeTransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: EditProfileView
    },
    {
      path: '/bankAccountList',
      name: 'bankAccountList',
      component: BankAccountListView
    }
    , {
      path: '/editBankAccount/:iban',
      name: 'editBankAccount',
      component: EditBankAccountView,
      props: true
    },
    {
      path: '/users',
      name: 'users',
      component: UserListView
    }, {
      path: '/editUser/:id',
      name: 'editUser',
      component: EditUserView,
      props: true
    },
    {
      path: '/customerDashboard',
      name: 'customerDashboard',
      component: CustomerDashboardView
    },
    {
      path: '/employeeDashboard',
      name: 'employeeDashboard',
      component: EmployeeDashboardView
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionList
    },
    {
      path: '/makeTransaction',
      name: 'makeTransaction',
      component: MakeTransaction,
      props: true
    }, {
      path: '/searchForIban',
      name: 'SearchForIban',
      component: SearchForIban
    },
    {
      path: '/employeeMakeTransaction',
      name: 'employeeMakeTransaction',
      component: EmployeeMakeTransaction
    }
  ]
})

export default router
