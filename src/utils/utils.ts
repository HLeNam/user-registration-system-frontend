export function mergeUrlPaths(...paths: string[]) {
    return (
        "/" +
        paths
            .map((path) => path.replace(/(^\/+|\/+$)/g, "")) // Remove leading and trailing slashes
            .filter(Boolean) // Filter out empty strings
            .join("/")
    ); // Join with a single slash
}
