import { useRouter as useBaseRouter } from 'next/navigation'
import nProgress from 'nprogress'

const useRouter = () => {
    const router = useBaseRouter()

    const { push } = router

    router.push = async (...args: Parameters<typeof push>) => {
        nProgress.start()
        return push(...args)
    }

    return router
}

export default useRouter
