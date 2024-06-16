import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";


function PackingList() {

  
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Table responsive="sm" striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Check</th>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-light">
                <td>1</td>
                <td>
                  <Form.Check
                    aria-label="option 1"
                  />
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Form.Check
                    aria-label="option 1"
                  />
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr className="bg-light">
                <td>3</td>
                <td>
                  <Form.Check
                    aria-label="option 1"
                  />
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-6">
          <Table responsive="sm" striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Check</th>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-light">
                <td>1</td>
                <td>
                  <Form.Check
                    aria-label="option 1"
                  />
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Form.Check
                    aria-label="option 1"
                  />
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr className="bg-light">
                <td>3</td>
                <td>
                  <Form.Check
                    aria-label="option 1"
                  />
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default PackingList;