const resultPage = (req,res) => {
    res.render('result', {title: 'Result Page'})
}

const repoLink = (req,res) => {
    const repolink = req.body
    console.log(repolink, req.body)
    res.json({ status: repolink })
}

module.exports = {
    repoLink,
    resultPage
}