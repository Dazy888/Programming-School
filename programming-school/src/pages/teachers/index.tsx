import React from "react"
import Head from "next/head"
import { NavigationLayout } from "@/layouts/Navigation"

const Teachers = () => {
    return(
        <NavigationLayout>
            <Head>
                <title>Teachers</title>
            </Head>
        </NavigationLayout>
    )
}

export default React.memo(Teachers)