//Iconos de admin
import { FiUsers } from 'react-icons/fi'
import {
  MdOutlineInventory2,
  MdOutlinePayment,
  MdOutlineShoppingCart,
  MdStoreMallDirectory
} from 'react-icons/md'
import { FaUsersGear, FaRegBell } from 'react-icons/fa6'
import { IoShieldHalfSharp } from 'react-icons/io5'
import { BsBoxSeam } from 'react-icons/bs'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BiPurchaseTag } from 'react-icons/bi'
//Iconos de Cliente
import { PiUserCheckLight } from 'react-icons/pi'
import { TbMoneybag, TbUserStar } from 'react-icons/tb'

export const DASHBOARD_LINKS = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: AiOutlineLineChart },
  {
    label: 'Solicitudes',
    href: '/admin/appointments',
    icon: FaRegBell
  },
  { label: 'Productos', href: '/admin/products', icon: BsBoxSeam },
  { label: 'Clientes', href: '/admin/customers', icon: FiUsers },
  { label: 'Inventario', href: '/admin/inventory', icon: MdOutlineInventory2 },
  { label: 'Proveedores', href: '/admin/providers', icon: FaUsersGear },
  { label: 'Administradores', href: '/admin/users', icon: IoShieldHalfSharp },
  { label: 'Barberos', href: '/admin/barbers', icon: TbUserStar },
  { label: 'Ventas', href: '/admin/sales', icon: MdOutlinePayment },
  { label: 'Compras', href: '/admin/purchases', icon: BiPurchaseTag }
]

export const BARBERSHOP_LINKS = [
  { label: 'Tienda', href: '/', icon: MdStoreMallDirectory },
  { label: 'Mi Carrito', href: '/cart', icon: MdOutlineShoppingCart },
  { label: 'Compras', href: '/account/purchases', icon: TbMoneybag },
  { label: 'Cuenta', href: '/account', icon: PiUserCheckLight }
]
