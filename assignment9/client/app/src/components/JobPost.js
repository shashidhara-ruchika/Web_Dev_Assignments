import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

export default function JobPost({jobPosts}) {
    return (
        
            <Row xs={1} md={2} lg={3} className="g-4">
              {jobPosts.map((jobPost) => (
                <Col key={jobPost.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{jobPost.title}</Card.Title>
                      <Card.Text>{jobPost.description}</Card.Text>
                      {jobPost.lastUpdated && <Card.Text><small className="text-muted">{jobPost.lastUpdated}</small></Card.Text>}
                      {jobPost.source && (
                        <blockquote className="blockquote mb-0 card-body">
                          <p>{jobPost.description}</p>
                          <footer className="blockquote-footer">
                            <small className="text-muted">{jobPost.source}</small>
                          </footer>
                        </blockquote>
                      )}
                      <Button variant="primary" href={jobPost.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          
      );
      
}