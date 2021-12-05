CREATE TABLE "recommendations" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"link" varchar(255) NOT NULL,
	"score" int NOT NULL,
	CONSTRAINT "recommendations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




