import React from 'react'

export default function Table2() {
    let person1=[{
        name1:"Veinal",
        phone1:7204199920,
        age1:21,
        email1:"veinalseq@gmail.com"
    }]
    let person2=[{
        name1:"Ramesh",
        phone1:9876543210,
        age1:22,
        email1:"ramesh@gmail.com"
    }]
    let person3=[{
        name1:"Suresh",
        phone1:1234567890,
        age1:23,
        email1:"suresh@gmail.com"
    }]
    const Delete =()=>{
        alert("your data has been deleted")
    }
  return (
    <div>
         <h1 align="center" style={{backgroundColor:"blackcolor",color:"white"}}>Table 2</h1>
        <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <div className="d-flex align-items-center">
                <div className="ms-3">
                <p className="fw-bold mb-1">Veinal</p>
                </div>
            </div>
            </td>
            <td>
            <p className="fw-normal mb-1">7204199920</p>
            <p className="text-muted mb-0">-</p>
            </td>
            <td>
                <p className="fw-normal mb-1">21</p>
            <span className="badge badge-success rounded-pill d-inline">Active</span>
            </td>
            <td>veinalseq@gmail.com</td>
            <td>
            <div className=''>
            <button type="button" className="btn btn-success btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#edit1">
                Edit
            </button>
            <button type="button" className="btn btn-primary btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#view1">
                View
            </button>
            <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#deletebtn">
                Delete
            </button>
            </div>
            </td>
        </tr>
        <tr>
            <td>
            <div className="d-flex align-items-center">
                <div className="ms-3">
                <p className="fw-bold mb-1">Ramesh</p>
                </div>
            </div>
            </td>
            <td>
            <p className="fw-normal mb-1">9876543210</p>
            {/* <p className="text-muted mb-0">Finance</p> */}
            </td>
            <td>
                <p>22</p>
            <span className="badge badge-primary rounded-pill d-inline" >Onboarding</span>
            </td>
            <td>ramesh@gmail.com</td>
            <td>
            <div className=''>
            <button type="button" className="btn btn-success btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#edit2">
                Edit
            </button>
            <button type="button" className="btn btn-primary btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#view2">
                View
            </button>
            <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#deletebtn">
                Delete
            </button>
            </div>
            </td>
        </tr>
        <tr>
            <td>
            <div className="d-flex align-items-center">
                <div className="ms-3">
                <p className="fw-bold mb-1">Soorya H</p>
                
                </div>
            </div>
            </td>
            <td>
            <p className="fw-normal mb-1">1234567890</p>
            {/* <p className="text-muted mb-0">UI/UX</p> */}
            </td>
            <td>
                <p>23</p>
            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
            </td>
            <td>soorya123@gmail.com</td>
            <td>
            <div className=''>
            <button type="button" className="btn btn-success btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#edit3">
                Edit
            </button>
            <button type="button" className="btn btn-primary btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#view3">
                View
            </button>
            <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#deletebtn">
                Delete
            </button>
            </div>
            </td>
        </tr>
        </tbody>
    </table>
        <br />


        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button> */}
        
        <div className="modal fade" id="edit1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div>
                {person1.map((p1)=>{
                        return(
                            <>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder={p1.name1}/>
                            </div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={p1.phone1}/>
                            </div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={p1.age1}/>
                            </div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder={p1.email1}/>
                            </div>
                            </>
                        )
                    })}
                </div>
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

        {/* for view button */}

        <div className="modal fade" id="view1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">VIEW</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {person1.map((p1)=>{
                    return(
                        <>
                        <li>{p1.name1}</li>
                        <li>{p1.phone1}</li>
                        <li>{p1.age1}</li>
                        <li>{p1.email1}</li>
                        </>
                    )
                })}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

        {/* for delete button*/}

        <div className="modal fade" id="deletebtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Warning!!!</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Do you want to delete this?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
                <button onClick={Delete} type="button" className="btn btn-primary" >YES</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}