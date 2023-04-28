import "./list.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import OrderDetails from "../../../../pages/OrderDetails";
import Datatable from "../../../../components/productDatatable/Datatable";

const AdminOrderDetails = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <OrderDetails />
      </div>
    </div>
  );
};

export default AdminOrderDetails;
