import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../datatablesource";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { endpoint } from "../../data";
import CustomNavLink from "../CustomNavLink";
import PageNavigation from "../PageNavigation";

const Datatable = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");

  const handleGetBooks = () => {
    console.log(page);
    fetch(`${endpoint}/admin/books?page=${page ? Number(page) + 1 : 1}`, {
      headers: {
        authorization: Cookies.get("authToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    fetch(`${endpoint}/admin/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: Cookies.get("authToken"),
      },
    })
      .then((response) => {
        if (response.status == 200) {
          handleGetBooks();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleGetBooks();
  }, [page]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Lựa chọn",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <CustomNavLink
              to={`/books/${params.row.id}`}
              width={"100%"}
              height={"60%"}
            >
              <div className="viewButton">Xem</div>
            </CustomNavLink>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách sản phẩm
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pagination={{ paginationModel: { pageSize: 25, page: 0 } }}
      />
      <PageNavigation
        current={Number(page)}
        total={999}
        urlPattern="/admin/books"
      />
    </div>
  );
};

export default Datatable;
