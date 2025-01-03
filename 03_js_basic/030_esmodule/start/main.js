// デフォルトエクスポートは{}不要でimport側で名前を自由に変更可能。
import functionB, { hello, User } from "./module.js";

hello();
functionB();
// クラスの使われ方としてはnew演算子をつけて()内が引数としてconstructorに渡る
const user = new User("Tom");
user.hello();
