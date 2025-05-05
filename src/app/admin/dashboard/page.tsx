/* eslint-disable import/no-unresolved */
import { Suspense } from 'react'

import CustomerGrowthChart from '@admin/dashboard/CustomersGrowthChart'
import HalfYearSalesChart from '@admin/dashboard/HalfYearSalesChart'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@shared/components/ui/card'
import {
  TotalProfit,
  CustomersRegistered,
  TotalSales,
  TotalExpenses
} from '@admin/dashboard/DashBoardHeaders'

export default async function AdminPage() {
  return (
    <>
      <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <TotalProfit />
        <CustomersRegistered />
        <TotalSales />
        <TotalExpenses />
      </section>
      <section className="relative w-full space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Ventas del año</CardTitle>
            <div className="w-full flex justify-end"></div>
          </CardHeader>
          <CardContent>
            <Suspense></Suspense>
          </CardContent>
        </Card>
      </section>

      <section className="relative w-full flex gap-5 max-lg:flex-col">
        <Card className="w-full lg:w-[55%]">
          <CardHeader>
            <CardTitle>Grafica de Ventas Realizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense>
              <HalfYearSalesChart />
            </Suspense>
          </CardContent>
          <CardFooter>Ultimos 6 meses</CardFooter>
        </Card>

        <Card className="w-full lg:w-[45%]">
          <CardHeader>
            <CardTitle>Ultimas Ventas Realizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense></Suspense>
          </CardContent>
          <CardFooter>Ultimos 6 meses</CardFooter>
        </Card>
      </section>

      <section className="w-full relative flex gap-5 max-lg:flex-col">
        <Card className="w-full lg:w-[40%]">
          <CardHeader>
            <CardTitle>Los Mejores Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense></Suspense>
          </CardContent>
          <CardFooter>Ultimos 6 meses</CardFooter>
        </Card>

        <Card className="w-full lg:w-[60%]">
          <CardHeader>
            <CardTitle>Crecimiento de clientes registrados</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense>
              <CustomerGrowthChart />
            </Suspense>
          </CardContent>
          <CardFooter>Ultimos 6 meses</CardFooter>
        </Card>
      </section>
    </>
  )
}
