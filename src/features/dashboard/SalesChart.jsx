import styles from "./SalesChart.module.css";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading.jsx";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext.jsx";
import { format } from "date-fns";

function SalesChart({ sales }) {
  const { darkMode } = useDarkMode();

  const formattedSales = sales?.map((sale) => ({
    ...sale,
    label: format(new Date(sale.date), "MMM dd"),
  }));

  const colors = darkMode
    ? {
        totalBookingPrice: { stroke: "#4f46e5", fill: "#4f46e5" },
        totalExtrasPrice: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
        stroke: "#4b5563",
      }
    : {
        totalBookingPrice: { stroke: "#4f46e5", fill: "#c7d2fe" },
        totalExtrasPrice: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
        stroke: "#d1d5db",
      };

  return (
    <DashboardBox className={styles["sales-chart"]}>
      <Heading size="md">
        Sales from {format(new Date(sales[0].date), "MMM dd")} -{" "}
        {format(new Date(sales[sales.length - 1].date), "MMM dd")}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={formattedSales}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" stroke={colors.stroke} />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            strokeWidth={2}
            name={"Total Sales"}
            unit="$"
            dataKey="totalBookingPrice"
            type="monotone"
            stroke={colors.totalBookingPrice.stroke}
            fill={colors.totalBookingPrice.fill}
          />
          <Area
            strokeWidth={2}
            name={"Extras Sales"}
            unit="$"
            dataKey="totalExtrasPrice"
            type="monotone"
            stroke={colors.totalExtrasPrice.stroke}
            fill={colors.totalExtrasPrice.fill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default SalesChart;
