import {server} from "./src/commons/mocks/index"

beforeAll(()=>server.listen())
afterAll(()=>server.close())