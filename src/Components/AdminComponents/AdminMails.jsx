import React, { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  ListGroup,
  Container,
  Form,
} from "react-bootstrap";

const AdminMails = () => {
  const [mails, setMails] = useState([
    {
      id: 1,
      from: "venky@gmail.com",
      subject: "React dashboard issue",
      body: "There is an issue with the dashboard.",
      date: "2024-12-18",
    },
    {
      id: 2,
      from: "Mounisha@gmail.com.com",
      subject: "Request for Meeting",
      body: "Can we schedule a meeting for project discussion?",
      date: "2024-12-17",
    },
    {
      id: 3,
      from: "Harini@gmail.com",
      subject: "New Project Proposal",
      body: "I have a new proposal for the upcoming project.",
      date: "2024-12-15",
    },
    {
      id: 4,
      from: "venky@gmail.com",
      subject: "React dashboard issue",
      body: "There is an issue with the dashboard.",
      date: "2024-12-18",
    },
    {
      id: 5,
      from: "Mounisha@gmail.com.com",
      subject: "Request for Meeting",
      body: "Can we schedule a meeting for project discussion?",
      date: "2024-12-17",
    },
    {
      id: 6,
      from: "Harini@gmail.com",
      subject: "New Project Proposal",
      body: "I have a new proposal for the upcoming project.",
      date: "2024-12-15",
    },
  ]);

  const [selectedMail, setSelectedMail] = useState(null);
  const [isComposing, setIsComposing] = useState(false);
  const [newMail, setNewMail] = useState({ to: "", subject: "", body: "" });

  const handleMailClick = (mail) => {
    setSelectedMail(mail);
    setIsComposing(false);
  };

  const handleCompose = () => {
    setSelectedMail(null);
    setNewMail({ to: "", subject: "", body: "" });
    setIsComposing(true);
  };

  const handleSendMail = () => {
    if (newMail.to && newMail.subject && newMail.body) {
      const newMailEntry = {
        id: mails.length + 1,
        from: "Rohit@gmail.com",
        ...newMail,
        date: new Date().toISOString().split("T")[0],
      };
      setMails([newMailEntry, ...mails]);
      setNewMail({ to: "", subject: "", body: "" });
      setIsComposing(false);
    } else {
      alert("Please fill in all fields before sending!");
    }
  };

  return (
    <div
      style={{
        width: "85%",
        marginLeft: "15%",
        marginTop: "50px",
        height: "auto",
      }}
      className="bg-light"
    >
      <Container>
        <Row>
          <Col md={4} className="bg-white border-end">
            <h5 className="p-3">Inbox</h5>
            <Button className="m-3" variant="primary" onClick={handleCompose}>
              Compose Mail
            </Button>
            <ListGroup variant="flush">
              {mails.map((mail) => (
                <ListGroup.Item
                  key={mail.id}
                  onClick={() => handleMailClick(mail)}
                  style={{ cursor: "pointer" }}
                  className="d-flex flex-column"
                >
                  <strong>{mail.subject}</strong>
                  <small>Date: {mail.date}</small>
                  <small>From: {mail.from}</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={8}>
            <Card className="m-3">
              {isComposing ? (
                <>
                  <Card.Header>Compose Mail</Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>To</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Recipient's email"
                          value={newMail.to}
                          onChange={(e) =>
                            setNewMail({ ...newMail, to: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Subject"
                          value={newMail.subject}
                          onChange={(e) =>
                            setNewMail({ ...newMail, subject: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Write your message here..."
                          value={newMail.body}
                          onChange={(e) =>
                            setNewMail({ ...newMail, body: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="success" onClick={handleSendMail}>
                      Send
                    </Button>
                    <Button
                      style={{ marginLeft: "6px" }}
                      variant="secondary"
                      onClick={() => setIsComposing(false)}
                    >
                      Cancel
                    </Button>
                  </Card.Footer>
                </>
              ) : selectedMail ? (
                <>
                  <Card.Header>
                    <strong>{selectedMail.subject}</strong>
                  </Card.Header>
                  <Card.Body>
                    <h5>From: {selectedMail.from}</h5>
                    <p>Date: {selectedMail.date}</p>
                    <hr />
                    <p>{selectedMail.body}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedMail(null)}
                    >
                      Back to Inbox
                    </Button>{" "}
                    <Button
                      variant="primary"
                      onClick={() =>
                        setNewMail({
                          to: selectedMail.from,
                          subject: `Re: ${selectedMail.subject}`,
                          body: "",
                        }) || setIsComposing(true)
                      }
                    >
                      Reply
                    </Button>
                  </Card.Footer>
                </>
              ) : (
                <Card.Body>
                  <p>Select a mail to view its details or compose a new one.</p>
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminMails;
