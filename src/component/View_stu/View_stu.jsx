import React, { useState } from 'react'
import { Button, Container, Form, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import no_data from '../../../public/no-data.jpg'
import { FaEllipsisV, FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'


const getdata = () => {
  let data = JSON.parse(localStorage.getItem("st_data"));
  if (data != null) {
    return data;
  }
  return [];
}

const filterdata = () => {
  const co_data = getdata();
  const course_d = co_data.map((cou) => {
    return cou.course;
  })
  // console.log("course",course_d);

  const uniq_course = course_d.filter((uniq, index) => {
    return course_d.indexOf(uniq) == index;
  })
  // console.log("uniq_course",uniq_course);
  return uniq_course;
}

function View_stu() {

  const navigate = useNavigate();

  const [student_de, setStudent_de] = useState(getdata());
  const [st_filterdata, setSt_filterdata] = useState(filterdata());
  const [search_stu, setSearch_stu] = useState({
    search: ''
  });
  const [open_btn, setOpen_btn] = useState({
    id: '',
    isToggle: false
  });

  const handleedit = (id, index) => {
    let u_data = getdata();
    // console.log(u_data);

    let up_data = u_data.filter((u_stu) => {
      return u_stu.id == id;
    })

    // console.log(up_data,"up_data");
    navigate("/edit_student", { state: { single: up_data[0], index: index } });
  }

  const handledelete = (id) => {
    console.log(id, "de_id");
    let de_data = getdata();

    let delete_re = de_data.filter((de) => {
      return de.id != id;
    })

    localStorage.setItem("st_data", JSON.stringify(delete_re));
    setStudent_de(delete_re);

  }

  const handlefilter = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;

    let fi_data = getdata();

    if (value != -1) {
      let f_data = fi_data.filter((fda) => {
        // console.log(fdata.course,"fdata");
        return fda.course === value;
      })
      // console.log(f_data,"f_data");
      setStudent_de(f_data);
    }
    else {
      setStudent_de(getdata());
    }
  }


  const handlesearch = (e) => {
    // console.log(e.target.value);
    let name = e.target.name;
    let val = e.target.value;

    setSearch_stu({ [name]: val });

    let se_data = getdata();

    let search_d = se_data.filter((s_re) => {
      return s_re.fname.toLowerCase().indexOf(val.toLowerCase()) > -1;
    })
    // console.log(search_d,"search_d");
    setStudent_de(search_d);
  }

  const handlesort = (type) => {
    let so_data = getdata();
    let sort_d;

    if (type == "Asc") {
      sort_d = so_data.sort((stuA, stuB) => {
        return stuA["fname"].localeCompare(stuB["fname"]);
      })
    }
    else if (type == "Dec") {
      sort_d = so_data.sort((stuA, stuB) => {
        return stuB["fname"].localeCompare(stuA["fname"]);
      })
    }
    else if (type == "AscId") {
      sort_d = so_data.sort((stuA, stuB) => {
        return stuA["id"] - stuB["id"];
      })
    }
    else {
      sort_d = so_data.sort((stuA, stuB) => {
        return stuB["id"] - stuA["id"];
      })
    }
    setStudent_de(sort_d);
  }


  const handlebopen = (id) => {
    // console.log("click",id);
    if (open_btn.id == id) {
      setOpen_btn({
        id: id,
        isToggle: false
      })
    }
    else {
      setOpen_btn({
        id: id,
        isToggle: true
      })
    }
  }

  const handleview = (stu) => {
    // console.log("stu",stu);
    navigate('/view', { state: stu });
  }


  return (
    <>
      <Container>
        <Row>
          <div className="d-flex mt-3 mb-3" style={{ justifyContent: "space-between" }}>
            <div className='mb-3 col-4'>
              <label style={{ marginRight: 10 }}>Course :</label>
              <select onChange={(e) => { handlefilter(e) }}>
                <option value={"-1"}>All</option>
                {
                  st_filterdata.map((fi_cou) => {
                    return (
                      <option value={fi_cou}>{fi_cou}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='col-4'>
              <Button className='btn-info me-2' onClick={() => handlesort("Asc")}>A-Z</Button>
              <Button className='btn-info me-2' onClick={() => handlesort("Dec")}>Z-A</Button>
              <Button className='btn-info me-2' onClick={() => handlesort("AscId")}>1-N</Button>
              <Button className='btn-info' onClick={() => handlesort("DecId")}>N-1</Button>
            </div>
            <div className='col-4'>
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Search" name='search' value={search_stu.search} onChange={handlesearch} />
                </Form.Group>
              </Form>
            </div>
          </div>
          <Table responsive="sm">
            {
              student_de.length != 0 ?
                <>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Course</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      student_de.map((stu, index) => {
                        return (
                          <tr>
                            <td>
                              {stu.id}
                            </td>
                            <td>
                              {stu.fname + ' ' + stu.lname}
                            </td>
                            <td>
                              {stu.email}
                            </td>
                            <td>
                              {stu.phone}
                            </td>
                            <td>
                              {stu.address}
                            </td>
                            <td>
                              {stu.city}
                            </td>
                            <td>
                              {stu.course}
                            </td>
                            <td>
                              {stu.gender}
                            </td>
                            <td>
                              <div className='drop'>
                                <button className='btn' onClick={() => { handlebopen(stu.id) }}><FaEllipsisV /></button>
                                {
                                  open_btn.id === stu.id && open_btn.isToggle ?
                                    <div className="drop_menu" id='drop_menu'>
                                      <button className='btn text-primary' onClick={() => { handleedit(stu.id, index) }}><FaPencilAlt className='me-2' />Edit</button>
                                      <button className='btn text-danger' onClick={() => { handledelete(stu.id) }}><FaTrashAlt className='me-2' />Delete</button>
                                      <button className='btn' onClick={() => { handleview(stu) }}><FaEye className='me-2' />View</button>
                                    </div>
                                    : ""
                                }
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </>
                :
                <div style={{ width: "50%", margin: "0 auto" }}>
                  <img src={no_data} alt="no-data" style={{ width: "100%", height: "100%" }} />
                </div>
            }
          </Table>
        </Row>
      </Container>
    </>
  )
}

export default View_stu