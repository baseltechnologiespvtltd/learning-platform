import React, { useState } from "react";
import {
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const AdminCalender = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tutors Meeting",
      date: "2024-12-20",
      description: "Discuss progress on related subjects or courses.",
    },
    {
      id: 2,
      title: "Discuss about the financial reports",
      date: "2024-12-22",
      description: "Submit quarterly financial reports.",
    },
    {
      id: 3,
      title: "New Teacher Orientation",
      date: "2024-12-25",
      description: "Introduce new hires to company policies.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ title: "", date: "", description: "" });
      setShowModal(false);
    } else {
      alert("Please fill out all fields.");
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
      className="bg-light p-4"
    >
      <Container>
        <Row>
          <Col md={8}>
            <h3>Admin Calendar</h3>
            <Card className="mt-3">
              <Card.Header>Upcoming Events</Card.Header>
              <ListGroup variant="flush">
                {events.map((event) => (
                  <ListGroup.Item key={event.id}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5>{event.title}</h5>
                        <small>{event.date}</small>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <h5 className="mt-3">Actions</h5>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Add Event
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminCalender;
