import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import table from '../../table.json'

const ProductsChart = () => {
  // const [products,setProducts] = useState([])
  const [table, setTable] = useState([]);

  let total = 0;
  let cost = 0;
  let sell = 0;

  for (let index = 0; index < table.length; index++) {
    total =
      parseInt(total) +
      (parseInt(table[index].sellPrice ? table[index].sellPrice : 0) -
        parseInt(table[index].cost ? table[index].cost : 0));
    cost = parseInt(cost) + parseInt(table[index].cost ? table[index].cost : 0);
    sell =
      parseInt(sell) +
      parseInt(table[index].sellPrice ? table[index].sellPrice : 0);
  }

  useEffect(() => {
    fetch("https://young-tundra-08226.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }, []);

  const deleteBtn = (id) => {
    const confirm = window.confirm("Remove this Product?");
    if (confirm) {
      fetch(`https://young-tundra-08226.herokuapp.com/data/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully removed item");
            const newProducts = table.filter((order) => order._id !== id);
            setTable(newProducts);
          }
        });
    }
  };
  return (
    <>
      <div className="text-center"></div>
      <div className="">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">ডেট</th>
              <th scope="col">নাম</th>
              <th scope="col">কোড</th>
              <th scope="col">স্টক কার্টন</th>
              <th scope="col">ভিতরের পরিমান</th>

              <th scope="col">স্টক পিস</th>

              {/* <th scope="col">To-quantity</th> */}
              <th scope="col">ক্রয়মূল্য</th>
              <th scope="col">ডেলিভারি</th>
              <th scope="col">বিক্রিত কার্টন</th>
              <th scope="col">বিক্রয়মূল্য</th>
              <th scope="col">রিটার্ন কার্টন</th>
              <th scope="col">ড্যামেজ(BDT)</th>

              <th scope="col">লাভ</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {table.map((rowData) => (
              <tr className="text-center" key={rowData?._id}>
                <td>{rowData?.date}</td>
                <td>{rowData?.productName}</td>
                <td>{rowData?._id.slice(7, 12)}</td>
                <td>{rowData?.cQ}</td>
                <td>{rowData?.cIQ}</td>
                <td>{rowData?.cIQ * rowData?.cQ}</td>
                <td>{rowData?.cost ? rowData?.cost : "X"}</td>
                <td>{rowData?.delivery ? rowData?.delivery : "X"}</td>
                <td>{rowData?.sQ ? rowData?.sQ : "X"}</td>
                <td>{rowData?.sellPrice ? rowData?.sellPrice : "X"}</td>
                {/* <td className='bg-warning text-dark'>{(rowData?.rQ) ? rowData?.rQ : 'X'}</td> */}
                <td>{rowData?.sQ ? rowData?.delivery - rowData?.sQ : "X"}</td>
                {/* <td className='bg-warning text-dark'>{rowData?.damagePrice ? rowData?.damagePrice : 'X'}</td> */}
                <td>
                  {rowData?.sQ
                    ? (rowData?.cost / (rowData?.cQ - rowData?.sQ)).toFixed(0)
                    : "X"}
                </td>
                <td
                  className={
                    rowData?.sellPrice - rowData?.cost < 0
                      ? "bg-danger text-light"
                      : "bg-primary text-light"
                  }
                >
                  {rowData?.sellPrice - rowData?.cost
                    ? rowData?.sellPrice - rowData?.cost
                    : "X"}
                </td>
                <td>
                  <Link className="me-1" to={`/update/${rowData?._id}`}>
                    <i className="fas fa-edit"></i>
                  </Link>
                  <i
                    onClick={() => deleteBtn(rowData?._id)}
                    className="ms-1 fas fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
            <tr className="text-center">
              <td colSpan={4}>Total</td>
              <td></td>
              <td></td>
              <td>{cost}</td>
              <td></td>

              <td></td>
              <td>{sell}</td>
              <td></td>
              <td></td>

              <td
                colSpan={2}
                className={
                  total < 0
                    ? "text-danger text-start"
                    : "text-primary text-start"
                }
              >
                {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsChart;
