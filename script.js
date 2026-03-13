const URL = "https://kitek.ktkv.dev/static/posts.json"
const container =document.querySelector("main#feed")
const renderPost = (item) => {
    return ` <div class="card">
                <div class="card__body">
                    <div class="card__meta-top">
                        <span class="card__category">${item.category}</span>
                        <span class="card__status">${item.status}</span>
                        <span class="card__id">${item.id}</span>
                    </div>
                    <h2 class="card__title">
                        ${item.title}
                    </h2>
                    <p class="card__excerpt">
                        ${item.content}
                    </p>
                </div>
                <div class="card__footer">
                    <span class="card__byline">
                        Published
                        <span>${item.data}</span>
                    </span>
                    <div class="card__divider"></div>
                    <span class="card__byline">
                        User
                        <span>${item.userId}</span>
                    </span>
                    <div class="card__divider"></div>
                    <a
                        class="card__read-more"
                        href="${item.url}"
                        target="_blank"
                        rel="noopener">
                        Read
                    </a>
                </div>
            </div>
            <div class="card__image-wrap">
                <img
                    class="card__image"
                    src="${item.thumbnail}"
                    alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    loading="lazy" />
            </div>
                   
            <span class="card__slug">${item.slug}</span>
            </div>    
        `
}

const fetchData = async () => {
    const res = await fetch(URL)
    const json = await res.json()
    console.log(json)
    const html = json
    .map((post) => renderPost(post))
    .join("")
    container.innerHTML = html
} 
fetchData()