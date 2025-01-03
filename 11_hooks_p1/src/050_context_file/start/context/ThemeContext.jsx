// 本来useContextは使う時に使うhooksだがここでコンテキストと組み合わせて一つにしておく。
import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

// 使う側でuseContextと定義したコンテキスト（ThemeContext）の２つをインポートして組み合わせるのは面倒なのでここで組み合わせておくことで、使う時に以下のように組み合わせた関数（useTheme）だけをインポートするだけで済む！
export const useTheme = () => useContext(ThemeContext);
export const useUpdateTheme = () => useContext(ThemeUpdateContext);
