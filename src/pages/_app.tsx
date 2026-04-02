import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

/**
 * Next.js 全局应用入口
 *
 * 作用：
 * - 注入全局样式（Tailwind + SCSS）
 * - 渲染当前路由对应的页面组件
 */
const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
