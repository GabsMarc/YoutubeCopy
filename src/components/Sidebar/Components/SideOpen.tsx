import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "./buttomOpen";


export default function SideOpen() {
    return (
        <div className="w-[240px] h-[100vh] bg-[#0F0F0F] fixed">


            <div className="h-[94vh] mt-[56px] pt-[10px] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-[#717171] scrollbar-track-transparent">

                <Button tagName="VscHome" title='Início' link="/" />
                <Button tagName="SiYoutubeshorts" title='Shorts' link="/Shorts" />
                <Button tagName="MdOutlineSubscriptions" title='Inscrições' />

                <div className="mt-3 mb-3 ml-[13px] mr-[5px] bg-[#303030] h-[1px]"></div>

                <div className="w-[204] h-[40px] ml-[13px] mr-[13px] rounded-[10px] hover:bg-[#272727] flex text-white gap-6 cursor-pointer">
                    <span className="self-center overflow-hidden ml-3">Você</span>
                    <p className="self-center font-mono -ml-2 text-gray-300" >{'>'}</p>
                </div>

                <Button tagName="LuHistory" title='Histórico' />
                <Button tagName="CgPlayList" title='Playlists' />
                <Button tagName="GoVideo" title='Seus vídeos' />
                <Button tagName="GoClock" title='Assistir mais tarde' />
                <Button tagName="AiOutlineLike" title='Vídeos com "Gostei" ' />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <h2 className="text-white font-medium ml-7 pt-1 pb-1">Inscrições</h2>

                <Button tagName="PiUserCircleFill" title="Inscrito 1" />
                <Button tagName="PiUserCircleFill" title="Inscrito 2" />
                <Button tagName="PiUserCircleFill" title="Inscrito 3" />
                <Button tagName="PiUserCircleFill" title="Inscrito 4" />
                <Button tagName="PiUserCircleFill" title="Inscrito 5" />
                <Button tagName="PiUserCircleFill" title="Inscrito 6" />
                <Button tagName="PiUserCircleFill" title="Inscrito 7" />

                <div className="w-[204] h-[40px] ml-[13px] mr-[13px] rounded-[10px] hover:bg-[#272727] flex text-white gap-6 cursor-pointer">
                    <MdOutlineKeyboardArrowDown className="self-center font-mono ml-3 text-[25px] text-gray-300" />
                    <span className="self-center">Mostrar mais</span>
                </div>


                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <h2 className="text-white font-medium ml-7 pt-1 pb-1">Explorar</h2>

                <Button tagName="BsFire" title="Em alta" />
                <Button tagName="RiShoppingBag4Line" title="Shopping" />
                <Button tagName="IoMusicalNotesOutline" title="Música" />
                <Button tagName="PiFilmSlate" title="filmes" />
                <Button tagName="CiStreamOn" title="Ao vivo" />
                <Button tagName="SiYoutubegaming" title="Jogos" />
                <Button tagName="MdNewspaper" title="Notícias" />
                <Button tagName="GoTrophy" title="Esportes" />
                <Button tagName="RiGraduationCapLine" title="Cursos" />
                <Button tagName="MdPodcasts" title="Podcasts" />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <h2 className="text-white font-medium ml-7 pt-1 pb-1">Mais do YouTube</h2>

                <Button tagName="FaYoutube" title="Youtube Premium" color="text-[#FE0201]" />
                <Button tagName="SiYoutubestudio" title="Youtube Studio" color="text-[#FE0201]" />
                <Button tagName="SiYoutubemusic" title="Youtube Music" color="text-[#FE0201]" />
                <Button tagName="SiYoutubekids" title="Youtube kids" color="text-[#FE0201]" />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <Button tagName="GoGear" title="Configurações" />
                <Button tagName="RiFlagLine" title="Histórico de denúncias" />
                <Button tagName="IoMdHelpCircleOutline" title="Ajuda" />
                <Button tagName="MdOutlineFeedback" title="Enviar feedback" />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>




                <div className="text-[#c3c3c3] text-[13px] leading-[18px] pt-2">
                    <div className="pl-[25px] pr-[20px] flex flex-wrap">
                        <a href="" className="pr-[10px]">Sobre</a>
                        <a href="">Imprensa</a>
                        <a href="">Direitos autorais</a>
                        <a href="">Entre em contato</a>
                        <a href="">Criadores de conteúdo</a>
                        <a href="">Publicidade</a>
                        <a href="" className="pl-[10px]">Desenvolvedores</a>
                    </div>
                    <div className="pl-[25px] pr-[20px] pt-[10px] flex flex-wrap">
                        <a href="" className="pr-[10px]">Termos</a>
                        <a href="">Privacidade</a>
                        <a href="">Política e segurança</a>
                        <a href="">Como funciona o YouTube</a>
                        <a href="">Testar os novos recursos</a>
                    </div>
                </div>

                <div className="text-[#717171] text-[12px] font-normal m-[15px] mb-[25px] pl-[10px] ">
                    © 2024 Google LLC
                </div>


            </div>
        </div>
    )
}