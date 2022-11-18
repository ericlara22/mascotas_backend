const pagination = (page, size, defaultSize=null) => {
    const pageAsNum = Number.parseInt(page);
    const sizeAsNum = Number.parseInt(size);
    let response ={};
    !Number.isNaN(pageAsNum) && pageAsNum > 0
    ? response.page = pageAsNum
    : response.page = 0;
    (!Number.isNaN(sizeAsNum) && sizeAsNum > 0)
    ? response.size = sizeAsNum
    : response.size = defaultSize;
    return response;
}

module.exports = pagination;