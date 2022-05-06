CREATE SCHEMA web_prog;

CREATE TABLE web_prog.user (
  id integer primary key,
  name varchar(50) not null,
  username varchar(30) not null,
  password varchar(50) not null
);

CREATE TABLE web_prog.investment (
  id integer primary key,
  name varchar(50) not null,
  value real not null,
  monthly_contribution real,
  rentability real not null,
  date_in date not null,
  date_out date not null
);

CREATE TABLE web_prog.history (
  user_id integer not null,
  investment_id integer not null,
  name varchar(50) not null,
  initial_value real not null,
  final_value real not null,
  date_out date not null,
  CONSTRAINT fk_user
  	FOREIGN KEY(user_id)
  		REFERENCES web_prog.user(id),	
  CONSTRAINT fk_investment
  	FOREIGN KEY(investment_id)
  		REFERENCES web_prog.investment(id)
);

CREATE SEQUENCE web_prog.pk_user_seq;
ALTER TABLE web_prog.user ALTER COLUMN id SET DEFAULT nextval('web_prog.pk_user_seq');
ALTER SEQUENCE web_prog.pk_user_seq OWNED BY web_prog.user.id;

CREATE SEQUENCE web_prog.pk_investment_seq;
ALTER TABLE web_prog.investment ALTER COLUMN id SET DEFAULT nextval('web_prog.pk_investment_seq');
ALTER SEQUENCE web_prog.pk_investment_seq OWNED BY web_prog.investment.id;

ALTER TABLE web_prog.history ADD UNIQUE(user_id, investment_id)

