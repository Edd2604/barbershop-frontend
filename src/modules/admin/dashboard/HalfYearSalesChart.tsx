'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/modules/shared/components/ui/chart'

const chartData = [
  { mes: 'Enero', ventas: Math.floor(Math.random() * 100) },
  { mes: 'Febrero', ventas: Math.floor(Math.random() * 100) },
  { mes: 'Marzo', ventas: Math.floor(Math.random() * 100) },
  { mes: 'Abril', ventas: Math.floor(Math.random() * 100) },
  { mes: 'Mayo', ventas: Math.floor(Math.random() * 100) },
  { mes: 'Junio', ventas: Math.floor(Math.random() * 100) },
]

const chartConfig = {
  label: {
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

export default function HalfYearSalesChart() {
  return (
    <div className="aspect-auto h-[500px] w-full">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[500px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: -20,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis type="number" dataKey="ventas" hide />
          <YAxis
            dataKey="mes"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={{ fill: 'var(--chart-2)' }}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar
            dataKey="ventas"
            stroke="var(--chart-2)"
            fill="var(--chart-2)"
            fillOpacity={0.9}
            radius={4}
          >
            <LabelList
              dataKey="ventas"
              position="right"
              offset={8}
              fontSize={12}
              className=" fill-foreground"
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}
