import { getTranslations } from 'next-intl/server';

// 导入 getTranslations 函数，该函数用于获取国际化翻译文本
import { getTranslations } from '../lib/translations';

/**
 * 用于生成页面元数据的异步函数
 * @param props - 包含路由参数的对象
 * @param props.params.locale - 当前语言环境的标识符
 * @returns 包含页面标题和描述的元数据对象
 */
export async function generateMetadata(props: { params: { locale: string } }) {
 // 根据传入的参数获取对应语言环境下的翻译文本
 const t = await getTranslations({
 locale: props.params.locale,
 namespace: 'Index',
 });

 // 返回一个包含页面标题和描述的对象
 return {
 // 页面标题，从翻译文本中获取
 title: t('meta_title'),
 // 页面描述，从翻译文本中获取
 description: t('meta_description'),
 };
}
