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

function View_stu() {

  const navigate = useNavigate();

  const [student_de, setStudent_de] = useState(getdata());

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
    // console.log(id, "de_id");
    let de_data = getdata();

    let delete_re = de_data.filter((de) => {
      return de.id != id;
    })

    localStorage.setItem("st_data", JSON.stringify(delete_re));
    setStudent_de(delete_re);

  }

  const handleview = (stu) => {
    // console.log("stu",stu);
    navigate('/view', { state: stu });
  }


  return (
    <>
      <Container>
        <Row>
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
                  <tbody style={{verticalAlign: "middle"}}>
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
                              <button className='btn text-primary' onClick={() => { handleedit(stu.id, index) }}><FaPencilAlt className='me-2' />Edit</button>
                              <button className='btn text-danger' onClick={() => { handledelete(stu.id) }}><FaTrashAlt className='me-2' />Delete</button>
                              <button className='btn' onClick={() => { handleview(stu) }}><FaEye className='me-2' />View</button>
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