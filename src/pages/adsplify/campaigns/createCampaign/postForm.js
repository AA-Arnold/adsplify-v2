import React, { useState } from 'react';
import { Row, Col, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import Select from 'react-select';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';
const options = [
  { value: 'IG', label: 'Instagram' },
  { value: 'TW', label: 'Twitter' },
];

const PostOptions = [
  { value: 'single-post', label: 'Single Post ' },
  { value: 'reels', label: 'Reels' },
  { value: 'story', label: 'Story' },
];

const PostForm = () => {
  const [selectedFiles, SetSelectedFiles] = useState([]);
  const handleSubmit = (event, values) => {
    console.log(values);
  };

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    SetSelectedFiles(files);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  console.log(selectedFiles);
  return (
    <div>
      <Row className="justify-content-between">
        <Col sm={5}>
          <Card className="shadow-lg">
            <CardBody>
              <h4 className="card-title">Basic Information</h4>
              <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
                <FormGroup>
                  <AvField
                    name="username"
                    type="text"
                    className="form-control"
                    id="username"
                    validate={{ email: true, required: true }}
                    placeholder="Campaign Name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="control-label">Platform Type</Label>
                  <Select
                    defaultValue={[options[2]]}
                    isMulti
                    name="platform"
                    options={options}
                    className="select2 select2-multiple"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="productdesc">Post Description</Label>
                  <textarea
                    className="form-control"
                    id="productdesc"
                    rows="5"
                  ></textarea>
                </FormGroup>

                <div className="mt-4 text-center">
                  <Button
                    color="primary"
                    className="w-100 waves-effect waves-light"
                    type="submit"
                  >
                    Log In
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Col>
        <Col sm={5}>
          <Card className="shadow-lg">
            <CardBody>
              <FormGroup>
                <Label className="control-label"> Select Post Type</Label>
                <Select
                  defaultValue={[PostOptions[2]]}
                  name="platform"
                  options={PostOptions}
                  className="select2 select2-multiple"
                />
              </FormGroup>

              <Row>
                <Col sm={12} className="mt-2">
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      handleAcceptedFiles(acceptedFiles)
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dropzone-post">
                        <div
                          className="dz-message-post needsclick mt-2"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <div className="mb-3">
                            <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </Col>
                {selectedFiles.map((f, i) => {
                  return (
                    <Col sm={6} className="mt-2">
                      <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete h-100"
                        key={i + '-file'}
                      >
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <img
                                data-dz-thumbnail=""
                                className="rounded bg-light w-100 h-100"
                                alt={f.name}
                                src={f.preview}
                              />
                            </Col>
                            {/* <Col>
                              <Link
                                to="#"
                                className="text-muted font-weight-bold"
                              >
                                {f.name}
                              </Link>
                              <p className="mb-0">
                                <strong>{f.formattedSize}</strong>
                              </p>
                            </Col> */}
                          </Row>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostForm;
