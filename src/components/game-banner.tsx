type GameBannerProps = {
  title: string
  ads: number
  bannerUrl: string
}

export function GameBanner ({ title, ads, bannerUrl }: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} />
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0'>
        <strong className='text-white font-bold block whitespace-nowrap text-ellipsis overflow-hidden'>
          {title}
        </strong>
        <p className='text-purple-500 text-sm block'>{ads} anúncio(s)</p>
      </div>
    </a>
  )
}
