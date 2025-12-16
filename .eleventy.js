const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/script.js");

    // Markdown configuration
    const md = markdownIt({ html: true, breaks: true, linkify: true });
    eleventyConfig.setLibrary("md", md);

    // Articles collection (sorted by date, newest first)
    eleventyConfig.addCollection("articles", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/articles/*.md")
            .sort((a, b) => b.date - a.date);
    });

    // Featured article (single)
    eleventyConfig.addCollection("featuredArticle", function (collectionApi) {
        const articles = collectionApi.getFilteredByGlob("src/content/articles/*.md");
        return articles.filter(article => article.data.featured === true)[0] || articles[0];
    });

    // Authors collection
    eleventyConfig.addCollection("authors", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/authors/*.md");
    });

    // Staff authors
    eleventyConfig.addCollection("staffAuthors", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/authors/*.md")
            .filter(author => author.data.type === "Staff");
    });

    // Non-resident fellows
    eleventyConfig.addCollection("fellows", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/authors/*.md")
            .filter(author => author.data.type !== "Staff");
    });

    // Date filter
    eleventyConfig.addFilter("dateFormat", function (date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    });

    // Excerpt filter
    eleventyConfig.addFilter("excerpt", function (content, length = 150) {
        if (!content) return "";
        const text = content.replace(/<[^>]+>/g, "").replace(/\n/g, " ");
        return text.length > length ? text.substring(0, length) + "..." : text;
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
