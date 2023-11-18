import {getTemplate, getTemplateByCodesReturnMap} from "$lib/api.js";

export const load = async ({params}) => {
    const template = await getTemplate(params.slug);

    let useFinalContent = false
    let partialCodes = []
    let partialTemplates = null;
    if (template.partial) {
        partialCodes = partialCodes.concat(Object.values(template.loadingPartialCodes))
    }
    if (template.childrenCodes) {
        partialCodes = partialCodes.concat(Object.values(template.childrenCodes))
        useFinalContent = true
    }
    if (template.loadingHeadCodes) {
        partialCodes = partialCodes.concat(Object.values(template.loadingHeadCodes))
    }
    if (partialCodes.length > 0) {
        let attrStr = ""
        if (template.attrs) {
            for (const [key, value] of Object.entries(template.attrs)) {
                attrStr += `${key}=${value}`
            }
        }
        partialTemplates = await getTemplateByCodesReturnMap(
            partialCodes.join(","),
            attrStr,
            useFinalContent
        )
    }

    let loadHead = ""
    if (template.loadingHeadCodes) {
        Object.values(template.loadingHeadCodes).forEach(code => {
            if (partialTemplates[code]) {
                loadHead = `${loadHead} ${useFinalContent ? partialTemplates[code].finalContent : partialTemplates[code].htmlContent}`
            }
        })
    }

    return {
        template: template,
        partials: partialTemplates,
        useFinalContent: useFinalContent,
        loadHead: loadHead
    }
}

