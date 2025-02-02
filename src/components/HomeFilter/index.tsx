'use client'




export function HomeFilter() {

    const Filters = [
        {
            id: 1,
            text: 'Tudo',
            bgColor: 'bg-white',
            textColor: "text-[#272727]"
        },
        {
            id: 2,
            text: 'Jogos',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 3,
            text: 'Música',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 4,
            text: 'Podcasts',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 5,
            text: 'Psicologia',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 6,
            text: 'Notícias',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 7,
            text: 'Mixes',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 8,
            text: 'Ao vivo',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 9,
            text: 'Motor',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 10,
            text: 'Assistidos',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 11,
            text: 'Novidades para você',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 12,
            text: 'Novidades para você',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 13,
            text: 'Novidades para você',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 14,
            text: 'Novidades para você',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
        {
            id: 15,
            text: 'Novidades para você',
            bgColor: 'bg-[#272727]',
            textColor: "text-white"
        },
    ]


    return (

        <div className="flex space-x-3">
            {
                Filters.map(filter => (
                    <div key={filter.id} className={`${filter.bgColor} ${filter.textColor} h-[32px] content-center pl-3 pr-3 rounded-[8px] font-medium text-[15px] cursor-pointer ${filter.id != 1 ? 'hover:bg-[#3F3F3F]' : ''}`}>
                        <span className="text-nowrap">{filter.text}</span>
                    </div>
                ))
            }
        </div>



    )
}