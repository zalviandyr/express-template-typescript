import Controller from "@cores/Controller";
import text from "@constants/text";
import Helper from "@helpers/Helper";

class HomeController extends Controller {
  index() {
    const data = {
      controller: "This data from HomeController.ts",
      helper: new Helper().text(),
    };

    this.success(data, text);
  }
}

export default HomeController;
