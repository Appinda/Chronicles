import assert from "assert";

const settings = {

  appname: "Chronicles",
  dbURI: process.env.DB_URI || ""

}

assert(typeof window || settings.dbURI != "", "MongoDB URI is required")

export default settings;