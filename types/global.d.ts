// Types for compiled templates
declare module 'hyrules-kitchen-frontend/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
