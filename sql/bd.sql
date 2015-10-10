CREATE TABLE employees
(
  id integer NOT NULL DEFAULT nextval('emploees_id_seq'::regclass),
  name text,
  surname text,
  salary numeric,
  CONSTRAINT emploees_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
