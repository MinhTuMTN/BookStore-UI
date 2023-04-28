import React from "react";
import { InfoItem, InfoItemLabel, Right } from "../../Profile";
import Sidebar from "../../../components/sidebar/Sidebar";
import styled from "styled-components";
import { colors } from "../../../data";

export const Title = styled.span`
  font-weight: bold;
  font-size: 20pt;
`;

export const FormInput = styled.input`
  flex: 5;
  border: 2px solid ${colors.color2};
  border-radius: 10px;
  font-size: 14pt;
  padding: 4px;
`;

export const Form = styled.form`
  width: 70%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 102%;
  justify-content: flex-end;
`;

export const Button = styled.div`
  display: block;
  padding: 7px;
  background-color: ${colors.color3};
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;
const AddProduct = () => {
//   const [data, setData] = useState({});
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {}, [errorMessage]);

//   useEffect(() => {
//     fetch(`${endpoint}/user/profile`, {
//       headers: {
//         authorization: Cookies.get("authToken"),
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const handleUpdate = () => {
//     fetch(`${endpoint}/user/profile`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: Cookies.get("authToken"),
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (response.status == 200) {
//           navigate("/profile");
//           return;
//         }
//       })
//       .catch((error) => {
//         setErrorMessage("Đã có lỗi xảy ra. Vui lòng thử lại");
//       });
//   };

  return (
    <div className="list">
      <Sidebar />

          <Right
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Title>Chỉnh Sửa Thông Tin Sản Phẩm</Title>
            <Form>
            <InfoItem>
                <InfoItemLabel>Đường dẫn hình ảnh</InfoItemLabel>
                <FormInput
                  placeholder="http://"
                //   value={data.address}
                //   onChange={(e) =>
                //     setData((prevData) => ({
                //       ...prevData,
                //       address: e.target.value,
                //     }))
                //   }
                />
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Tiêu đề</InfoItemLabel>
                <FormInput
                  placeholder={"Cuốn sách"}
                //   value={data.username}
                //   onChange={(e) =>
                //     setData((prevData) => ({
                //       ...prevData,
                //       username: e.target.value,
                //     }))
                //   }
                />
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Tác giả</InfoItemLabel>
                <FormInput
                  placeholder={"Nguyễn Văn A"}
                //   value={data.full_name}
                //   onChange={(e) =>
                //     setData((prevData) => ({
                //       ...prevData,
                //       full_name: e.target.value,
                //     }))
                //   }
                />
              </InfoItem>
              {/* <InfoItem>
                <InfoItemLabel>Email</InfoItemLabel>
                <FormInput
                  type="email"
                  placeholder="nguyenvana@gmail.com"
                  value={data.email}
                  onChange={(e) =>
                    setData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }
                />
              </InfoItem> */}
              {/* <InfoItem>
                <InfoItemLabel>Số điện thoại</InfoItemLabel>
                <FormInput
                  type="tel"
                  placeholder="012345689"
                  value={data.phone_number}
                  onChange={(e) =>
                    setData((prevData) => ({
                      ...prevData,
                      phone_number: e.target.value,
                    }))
                  }
                />
              </InfoItem> */}
              <InfoItem>
                <InfoItemLabel>Giá tiền</InfoItemLabel>
                <FormInput
                  placeholder="VNĐ"
                //   value={data.address}
                //   onChange={(e) =>
                //     setData((prevData) => ({
                //       ...prevData,
                //       address: e.target.value,
                //     }))
                //   }
                />
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Mô tả</InfoItemLabel>
                <FormInput
                  placeholder="Cuốn sách hay"
                //   value={data.address}
                //   onChange={(e) =>
                //     setData((prevData) => ({
                //       ...prevData,
                //       address: e.target.value,
                //     }))
                //   }
                />
              </InfoItem>
              <ButtonWrapper>
                <Button
                //  onClick={handleUpdate}
                 >
                    Cập nhật thông tin
                </Button>
              </ButtonWrapper>
            </Form>
          </Right>
    </div>
  );
};

export default AddProduct;
