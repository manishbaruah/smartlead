CREATE TABLE tbl_role
(
  role_id INT NOT NULL,
  role_name VARCHAR NOT NULL,
  PRIMARY KEY (role_id)
);

CREATE TABLE tbl_org
(
  org_id INT NOT NULL,
  org_name VARCHAR NOT NULL,
  parent_org_id INT NOT NULL,
  PRIMARY KEY (org_id)
);

CREATE TABLE tbl_project_type
(
  project_type_id INT NOT NULL,
  project_type_name VARCHAR NOT NULL,
  PRIMARY KEY (project_type_id)
);

CREATE TABLE tbl_project_stage
(
  project_stage_id INT NOT NULL,
  project_stage_name VARCHAR NOT NULL,
  PRIMARY KEY (project_stage_id)
);

CREATE TABLE tbl_builder
(
  builder_id INT NOT NULL,
  builder_name VARCHAR NOT NULL,
  PRIMARY KEY (builder_id)
);

CREATE TABLE tbl_amenities
(
  amenities_id INT NOT NULL,
  amenities_name VARCHAR NOT NULL,
  PRIMARY KEY (amenities_id)
);

CREATE TABLE tbl_lead_source
(
  lead_source_id INT NOT NULL,
  lead_source_name VARCHAR NOT NULL,
  PRIMARY KEY (lead_source_id)
);

CREATE TABLE tbl_lead_stage
(
  lead_stage_id INT NOT NULL,
  lead_stage_name VARCHAR NOT NULL,
  PRIMARY KEY (lead_stage_id)
);

CREATE TABLE tbl_document_type
(
  document_type_id INT NOT NULL,
  document_type_name VARCHAR NOT NULL,
  PRIMARY KEY (document_type_id)
);

CREATE TABLE tbl_user
(
  user_id SERIAL,
  username VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  userpwd VARCHAR NOT NULL,
  mobile VARCHAR NOT NULL,
  org_id INT NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (org_id) REFERENCES tbl_org(org_id),
  UNIQUE (username),
  UNIQUE (email)
);

CREATE TABLE tbl_user_roles
(
  user_role_id SERIAL,
  role_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (user_role_id),
  FOREIGN KEY (role_id) REFERENCES tbl_role(role_id),
  FOREIGN KEY (user_id) REFERENCES tbl_user(user_id)
);

CREATE TABLE tbl_project
(
  project_id SERIAL,
  project_name VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  brochure bytea,
  brochure_name VARCHAR,
  towers_no INT NOT NULL,
  wings_no INT NOT NULL,
  blocks_no INT NOT NULL,
  floors_no INT NOT NULL,
  units_no INT NOT NULL,
  created_on TIMESTAMP NOT NULL,
  created_by VARCHAR NOT NULL,
  modified_on TIMESTAMP NOT NULL,
  modified_by VARCHAR NOT NULL,
  project_type_id INT NOT NULL,
  project_stage_id INT NOT NULL,
  builder_id INT NOT NULL,
  PRIMARY KEY (project_id),
  FOREIGN KEY (project_type_id) REFERENCES tbl_project_type(project_type_id),
  FOREIGN KEY (project_stage_id) REFERENCES tbl_project_stage(project_stage_id),
  FOREIGN KEY (builder_id) REFERENCES tbl_builder(builder_id)
);

CREATE TABLE tbl_project_amenities
(
  project_amenities_id SERIAL,
  project_id INT NOT NULL,
  amenities_id INT NOT NULL,
  PRIMARY KEY (project_amenities_id),
  FOREIGN KEY (project_id) REFERENCES tbl_project(project_id),
  FOREIGN KEY (amenities_id) REFERENCES tbl_amenities(amenities_id)
);

CREATE TABLE tbl_lead
(
  lead_id SERIAL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone_no VARCHAR NOT NULL,
  company VARCHAR,
  website VARCHAR NOT NULL,
  mobile_no VARCHAR,
  source_campaign VARCHAR,
  source_medium VARCHAR,
  job_title VARCHAR,
  address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  country VARCHAR,
  interest_requirement VARCHAR,
  created_on TIMESTAMP NOT NULL,
  modified_on TIMESTAMP NOT NULL,
  created_by VARCHAR NOT NULL,
  modified_by VARCHAR NOT NULL,
  owner INT NOT NULL,
  lead_source_id INT NOT NULL,
  lead_stage_id INT,
  do_not_sms boolean DEFAULT false,
  do_not_track boolean DEFAULT false,
  do_not_email boolean DEFAULT false,
  do_not_call boolean DEFAULT false,
  zipcode character varying,
  notes VARCHAR NOT NULL,
  PRIMARY KEY (lead_id),
  FOREIGN KEY (owner) REFERENCES tbl_user(user_id),
  FOREIGN KEY (lead_source_id) REFERENCES tbl_lead_source(lead_source_id),
  FOREIGN KEY (lead_stage_id) REFERENCES tbl_lead_stage(lead_stage_id)
);

CREATE TABLE tbl_lead_projects
(
  lead_projects_id SERIAL,
  project_id INT NOT NULL,
  lead_id INT NOT NULL,
  PRIMARY KEY (lead_projects_id),
  FOREIGN KEY (project_id) REFERENCES tbl_project(project_id),
  FOREIGN KEY (lead_id) REFERENCES tbl_lead(lead_id)
);

CREATE TABLE tbl_lead_activity
(
  lead_activity_id SERIAL,
  activity_desc VARCHAR NOT NULL,
  created_on TIMESTAMP NOT NULL,
  created_by VARCHAR NOT NULL,
  lead_id INT NOT NULL,
  PRIMARY KEY (lead_activity_id),
  FOREIGN KEY (lead_id) REFERENCES tbl_lead(lead_id)
);

CREATE TABLE tbl_lead_task
(
  lead_task_id SERIAL,
  task_type VARCHAR NOT NULL,
  subject VARCHAR NOT NULL,
  location VARCHAR,
  schedule_from TIMESTAMP NOT NULL,
  schedule_to TIMESTAMP,
  description VARCHAR NOT NULL,
  created_on TIMESTAMP NOT NULL,
  created_by VARCHAR NOT NULL,
  updated_on TIMESTAMP NOT NULL,
  updated_by VARCHAR NOT NULL,
  owner INT NOT NULL,
  lead_id INT NOT NULL,
  organizer INT NOT NULL,
  attachment bytea,
  attachment_name VARCHAR,
  marketing_officer VARCHAR,
  status VARCHAR NOT NULL,
  completed_on TIMESTAMP,
  PRIMARY KEY (lead_task_id),
  FOREIGN KEY (owner) REFERENCES tbl_user(user_id),
  FOREIGN KEY (lead_id) REFERENCES tbl_lead(lead_id),
  FOREIGN KEY (organizer) REFERENCES tbl_user(user_id)
);

CREATE TABLE tbl_lead_note
(
  lead_note_id SERIAL,
  note VARCHAR NOT NULL,
  note_attachment bytea,
  note_name VARCHAR,
  created_on TIMESTAMP NOT NULL,
  updated_on TIMESTAMP NOT NULL,
  created_by VARCHAR NOT NULL,
  updated_by VARCHAR NOT NULL,
  lead_id INT NOT NULL,
  PRIMARY KEY (lead_note_id),
  FOREIGN KEY (lead_id) REFERENCES tbl_lead(lead_id)
);

CREATE TABLE tbl_lead_document
(
  lead_document_id SERIAL,
  description VARCHAR NOT NULL,
  document_name VARCHAR,
  created_on TIMESTAMP NOT NULL,
  updated_on TIMESTAMP NOT NULL,
  created_by VARCHAR NOT NULL,
  updated_by VARCHAR NOT NULL,
  lead_id INT NOT NULL,
  document_type_id INT NOT NULL,
  document bytea,
  PRIMARY KEY (lead_document_id),
  FOREIGN KEY (lead_id) REFERENCES tbl_lead(lead_id),
  FOREIGN KEY (document_type_id) REFERENCES tbl_document_type(document_type_id)
);


INSERT INTO tbl_amenities VALUES (1, 'Parking');
INSERT INTO tbl_amenities VALUES (2, 'Play Area');
INSERT INTO tbl_amenities VALUES (3, 'Gym');
INSERT INTO tbl_amenities VALUES (4, 'Club House');
INSERT INTO tbl_amenities VALUES (5, 'Fire Fighting System');
INSERT INTO tbl_amenities VALUES (6, 'Lift');
INSERT INTO tbl_amenities VALUES (7, 'Swimming Pool');
INSERT INTO tbl_amenities VALUES (8, '24/7 Power Backup');
INSERT INTO tbl_amenities VALUES (9, '24/7 Water Supply');
INSERT INTO tbl_amenities VALUES (10, 'Intercom');

INSERT INTO tbl_builder VALUES (1, 'Builder 1');
INSERT INTO tbl_builder VALUES (2, 'Builder 2');

INSERT INTO tbl_lead_source VALUES (1, 'Lead Source 1');
INSERT INTO tbl_lead_source VALUES (2, 'Lead Source 2');

INSERT INTO tbl_lead_stage VALUES (1, 'Lead Stage 1');
INSERT INTO tbl_lead_stage VALUES (2, 'Lead Stage 2');

INSERT INTO tbl_org VALUES (1, 'Organization1', 0);
INSERT INTO tbl_org VALUES (2, 'Organization2', 0);

INSERT INTO tbl_project_stage VALUES (1, 'Project Stage 1');
INSERT INTO tbl_project_stage VALUES (2, 'Project Stage 2');

INSERT INTO tbl_project_type VALUES (1, 'Project Type 1');
INSERT INTO tbl_project_type VALUES (2, 'Project Type 2');

INSERT INTO tbl_role VALUES (1, 'Admin');
INSERT INTO tbl_role VALUES (2, 'Employee');

INSERT INTO tbl_document_type(document_type_id, document_type_name) VALUES(1, 'Document type 1');
INSERT INTO tbl_document_type(document_type_id, document_type_name) VALUES(2, 'Document type 2');
