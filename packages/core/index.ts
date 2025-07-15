import { makeInstaller } from "@huodeng-ui/utils";
import components from "./components";
import '@huodeng-ui/theme/index.css'
const installer = makeInstaller(components);

export * from "@huodeng-ui/components";
export default installer;