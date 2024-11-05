import instance from "@/utils/http";

export function getCategoryApi() {
    return instance({
        url: "/home/category/head",
    })
}

