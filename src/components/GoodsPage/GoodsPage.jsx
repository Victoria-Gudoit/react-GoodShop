import { getGoodsByLimit } from "api/Api"
import { useEffect, useState } from "react"
import { Col, Row, Table as TableAntd } from 'antd';
import 'antd/dist/antd.css';
import { fetchGoodCategories, GoodsCategoriesSelectors } from "store/goodCategoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Selection } from ".";
import { Link } from 'react-router-dom';

export const GoodsPage = () => {

  const [datas, setDatas] = useState([])
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(220);
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    console.log(value);
  }

  const goodCategories = useSelector(GoodsCategoriesSelectors.getGoodCategories)

  const dispatch = useDispatch()

  const getGoodCategories = () => dispatch(fetchGoodCategories())

  useEffect(() => {
    getGoodCategories()
    setLoading(true);
    getGoodsByLimit(pageSize, total).then((r) => {
      setDatas(r.items);
      setTotal(r.total);
      setLoading(false);
    })
  }, [])


  const columns = [
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (label, record) => { return <Link to={`${record.categoryTypeId}/${record.id}`}>{label}</Link> },
      sorter: (a, b) => {
        return a.label.length - b.label.length
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => {
        return a.price - b.price
      }
    },

    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (description, e) => (
        <p style={{ width: 250 }}>{e?.description}</p>
      )
    },

  ];

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Selection handleChange={handleChange} goodCategories={goodCategories} />
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <TableAntd loading={loading} columns={columns} dataSource={datas} pagination={{ 
            total: total,
            pageSize: pageSize,
            onChange: (pageSize) => {
              setPageSize(pageSize.value);
            },
          }} />
        </Col>
      </Row>
    </div>
  )
}