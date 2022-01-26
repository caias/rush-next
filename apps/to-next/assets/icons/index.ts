function requireAll(requireContext: any) {
  requireContext.keys().map(requireContext);
}
const context = require.context('./', true, /\.svg$/);
export const fileNames: string[] = context
  .keys()
  .map(fileName => fileName.replace('./', '').replace('.svg', ''));

requireAll(context);

export {};
