const Handlebars = require("handlebars");

export default {
  render(templateName: string, data: any): string{
    templateName += 'Template';
    const templateEl:HTMLElement = document.getElementById(templateName);
    const templateSource:string = templateEl.innerHTML;
    const renderFn = Handlebars.compile(templateSource);

    return renderFn(data);
  }
}