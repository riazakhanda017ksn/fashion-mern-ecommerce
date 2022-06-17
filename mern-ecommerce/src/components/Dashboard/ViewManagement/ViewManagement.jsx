import React, { useEffect } from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./ViewManagement.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProduct } from "../../../actions/productAction";
import { getAllUser } from "../../../actions/userAction";
import { getAllOrders } from "../../../actions/orderAction";

const data = [
  {
    name: "Saturday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sunday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Monday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Tuesday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Wednesday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Thursday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Friday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const ViewManagement = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);
  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <>
      <>
        <DashboardSidebar />
      </>
      <div className="main-dashboard-management py-5 ">
        <div className="total-product dashboard-customization">
          <h2>products </h2>
          <h2>{products?.length}</h2>
        </div>
        <div className="total-orders dashboard-customization">
          <h2>order</h2>
          <h2>{orders?.length}</h2>
        </div>
        <div className="total-user dashboard-customization">
          <h2>users</h2>
          <h2>{users?.length}</h2>
        </div>
      </div>
      <div style={{ width: "100%", height: 300 }} className="rechart">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis className="custom-font-and-style" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#767676" fill="black" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ViewManagement;
