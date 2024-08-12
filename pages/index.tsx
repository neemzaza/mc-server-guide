import type { NextPage } from 'next'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Footer } from '../components/footer'

import Java from '../img/java.png'
import Bedrock from '../img/bedrock.jpg'
import McLogo from '../img/mclogo.png'

import versionApi from "../api/versionjava.json"
import versionBed from "../api/versionpe.json"

import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const Home: NextPage = () => {

  // Depend to gen zip file
  const zip = new JSZip();

  const [editionSel, setEditionSel] = useState<string>("");
  const [versionSel, setVersionSel] = useState<number>(0.0);
  const [templateSel, setTemplateSel] = useState<string>("");
  const [platformSel, setPlatformSel] = useState<string>("");

  const [ramMinUsage, setRamMinUsage] = useState<number>(1024);
  const [ramMaxUsage, setRamMaxUsage] = useState<number>(2048);
  const [codeRunServer, setCodeRunServer] = useState<string>("java -Xms" + ramMinUsage + "M -Xmx" + ramMaxUsage + "M -jar server.jar nogui");

  const classToId = (classname: string, id: string, state: string) => {
    // state => add : add class / del : delete class
    if (state === "add") {
      document.getElementById(id)?.classList.add(classname)
    }

    if (state === "del") {
      document.getElementById(id)?.classList.remove(classname)
    }
  }

  useEffect(() => {
    if (editionSel === "java") {
      classToId("active", "java", "add")
      classToId("active", "bedrock", "del")
      classToId("active", "both", "del")
    } else if (editionSel === "bedrock") {
      classToId("active", "bedrock", "add")
      classToId("active", "java", "del")
      classToId("active", "both", "del")
    } else if (editionSel === "both") {
      classToId("active", "both", "add")
      classToId("active", "bedrock", "del")
      classToId("active", "java", "del")
    }
  }, [editionSel])

  useEffect(() => {
    if (templateSel === "java-template") {
      classToId("active", "java-template", "add")
      classToId("active", "plugin", "del")
      classToId("active", "mods", "del")
    } else if (templateSel === "plugin") {
      classToId("active", "plugin", "add")
      classToId("active", "java-template", "del")
      classToId("active", "mods", "del")
    } else if (templateSel === "mods") {
      classToId("active", "mods", "add")
      classToId("active", "plugin", "del")
      classToId("active", "java-template", "del")
    }
  }, [templateSel])

  useEffect(() => {
    if (platformSel === "java-platform") {
      classToId("active", "java-platform", "add")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "spigot") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "add")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "paper") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "add")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "forge") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "add")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "fabric") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "add")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "minecraft") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "add")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "pocketmine") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "add")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "del")
    } else if (platformSel === "nukkitX") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "add")
      classToId("active", "geyser", "del")
    } else if (platformSel === "geyser") {
      classToId("active", "java-platform", "del")
      classToId("active", "spigot", "del")
      classToId("active", "paper", "del")
      classToId("active", "forge", "del")
      classToId("active", "fabric", "del")
      classToId("active", "minecraft", "del")
      classToId("active", "pocketmine", "del")
      classToId("active", "nukkitX", "del")
      classToId("active", "geyser", "add")
    }
  }, [platformSel])

  const setRunCode = (attribute: string, value: string) => {
    if (attribute === "min") {
      setRamMinUsage(parseInt(value) * 1024)
    } else if (attribute === "max") {
      setRamMaxUsage(parseInt(value) * 1024)
    }

    setCodeRunServer(`java -Xms${attribute === "min" ? parseInt(value) * 1024 : ramMinUsage}M -Xmx${attribute === "max" ? parseInt(value) * 1024 : ramMaxUsage}M -jar server.jar nogui`)
  }

  const genFile = () => {
    zip.file('eula.txt', 'eula=true');
    zip.file('run.bat', 'java -Xms1024M -Xmx2048M -jar server.jar nogui\npause');
    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'your-server.zip')
    })
  }

  return (
    <div className='main-page'>
      <section className="welcome page">
        <div className="container">
          <h1 className='title'>สวัสดี! ยินดีต้อนรับสู่ <br /><b className='highlight'>MCServerGuide</b></h1>
          <label>นี่คือเว็บไซด์ที่จะแนะนำการเปิดเซิฟกับคุณ!</label>
          <br />
          <br />
          <br />
          <a href="#get-started" className='btn btn-start'>เริ่ม</a>
        </div>
        <br />
        <br />
        <br />
      </section>

      <section className="get-started page" id="get-started">
        <div className="container">
          <h1>ก่อนอื่นเลย...</h1>
          <p>คุณอยากให้มายคราฟเวอร์ชั่นไหนเข้ามาเล่น</p>
          <div className="row">
            <div className="choice" id="java" onClick={() => setEditionSel("java")}>
              <Image src={Java} alt="" width={350} height={90} />
              <h3>Java Edition</h3>
              <label>(มายคราฟบนคอม)</label>
            </div>

            <div className="choice" id="bedrock" onClick={() => setEditionSel("bedrock")}>
              <Image src={Bedrock} alt="" width={100} height={100} />
              <h3>Pocket / Win 10 Edition</h3>
              <label>(มายคราฟบนมือถือ / แบบมือถือบนคอม)</label>
            </div>

            <div className="choice" id="both" onClick={() => setEditionSel("both")}>
              <Image src={Java} alt="" width={350} height={90} />
              <br />
              <Image src={Bedrock} alt="" width={100} height={100} />
              <h3>ทั้ง Java Edition และ Pocket / Win 10 Edition</h3>
              <label>(ทั้งมายคราฟบนคอมและมายคราฟบนมือถือ / แบบมือถือบนคอม)</label>
            </div>
          </div>
          <br />
          <section className="btn-section">
            <a href="#version-sel" className='btn btn-next'><i className="bi bi-arrow-right"></i>{" "}ต่อไป (เลือกเวอร์ชั่น)</a>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="version-sel page" id="version-sel">
        <div className="container">
          <h1>ต่อไป</h1>
          <fieldset>
            <legend>คุณอยากเปิดเวอร์ชั่นอะไร เช่น 1.18 {editionSel === "both" ? "(สำหรับการเปิดแบบเล่นทั้งคู่เวอร์ชั่นต้นคือเวอร์ชั่นของ Java ส่วนฝั่งมือถือหรือ Win 10 Edition จะเข้าได้ตั้งแต่ 1.17.0 - ล่าสุด)" : ""}</legend>
            <div className="input-sec">
              1.
              <input className="ver-sel" type="number" list="ver-list" value={versionSel} onChange={(e) => setVersionSel(parseFloat(e.target.value))} />
            </div>
            <datalist id="ver-list">
              {
                editionSel === "java" ?
                  versionApi.version.map((val, key) => (
                    <option value={val} key={key}></option>
                  ))
                  // : editionSel === "bedrock" ?
                  //   versionBed.version.map((val, key) => (
                  //     <option value={val} key={key}></option>
                  //   ))
                    :
                    versionApi.version.map((val, key) => (
                      <option value={val} key={key}></option>
                    ))
              }
            </datalist>
          </fieldset>
          <br />
          <section className="btn-section">
            <a href="#platform-sel" className='btn btn-next'><i className="bi bi-arrow-right"></i>{" "}ต่อไป (เลือกตัวเปิด)</a>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="platform-sel page" id="platform-sel">
        <div className="container">
          <h1>ตัวเปิดมีหลากหลาย...</h1>
          <p>คุณอยากได้เซิฟเปิดแบบไหน</p>
          <div className="row">
            <div className="choice" id="java-template" onClick={() => setTemplateSel("java-template")}>
              <h3>Vanilla Minecraft</h3>
              <label>(มายคราฟแบบปกติ ไม่มี Mods ไม่มี Plugin)</label>
            </div>

            <div className="choice" id="plugin" onClick={() => setTemplateSel("plugin")}>
              <h3>แบบลง Plugin ได้</h3>
              <label>(จะมีปลั๊กอินให้ลงบนเซิฟของเราได้) <a href="">อะไรคือ plugin?</a></label>
            </div>
            {
              editionSel === "java" ? (
                <>

                  <div className="choice" id="mods" onClick={() => setTemplateSel("mods")}>
                    <h3>แบบลง Mods ได้</h3>
                    <label>(ลง mods เข้าไปในเซิฟของคุณเพื่อที่จะให้ผู้เล่นที่ลง mods เล่นได้!) <a href="">อะไรคือ mods?</a></label>
                  </div>
                </>
              ) : null
            }
          </div>
          <br />
          <section className="btn-section">
            <a href="#service-sel" className='btn btn-next'><i className="bi bi-arrow-right"></i>{" "}ต่อไป (เลือกยี่ห้อตัวเปิด)</a>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="service-sel page" id="service-sel">
        <div className="container">
          <h1>ตัวเปิดมีหลากหลาย...</h1>
          <p>เลือกยี่ห้อตัวเปิดที่ต้องการ</p>
          <div className="row">
            {
              editionSel === "java" ? (

                templateSel === "java-template" ? <>
                   <div className="choice" id="java-platform" onClick={() => setPlatformSel("java-platform")}>
                    <h3>Official Minecraft Server Launcher</h3>
                    <label>(ตัวเปิดเซิฟของมายคราฟอย่างเป็นทางการ)</label>
                  </div>
                </>
                : templateSel === "plugin" ? <>
                   <div className="choice" id="spigot" onClick={() => setPlatformSel("spigot")}>
                    <h3>SpigotMC</h3>
                    <label>(เซิฟส่วนใหญ่นิยมใช้มากๆ)</label>
                  </div>
                  <div className="choice" id="paper" onClick={() => setPlatformSel("paper")}>
                    <h3>PaperMC</h3>
                    <label>(ต่อยอดจาก Spigot เสถียรกว่าแต่เปิดครั้งแรกจะโหลดช้ากว่า) {"<"} แนะนำ </label>
                  </div>
                </> : templateSel === "mods" ? <>
                   <div className="choice" id="forge" onClick={() => setPlatformSel("forge")}>
                    <h3>Forge</h3>
                    <label>(แบบ forge mods จะมีเยอะกว่าเช่น JEI, {"Biome O' Planty"})</label>
                  </div>
                  <div className="choice" id="fabric" onClick={() => setPlatformSel("fabric")}>
                    <h3>Fabric</h3>
                    <label>(แบบ fabric mods จะเสถียรกว่านิดนึง มี mods ดังๆ เยอะมาก)</label>
                  </div>
                </> : null

              ) : editionSel === "bedrock" ? (

                templateSel === "java-template" ? <>
                  <div className="choice" id="minecraft" onClick={() => setPlatformSel("minecraft")}>
                    <h3>Official Minecraft Server Launcher</h3>
                    <label>(ตัวเปิดเซิฟของมายคราฟอย่างเป็นทางการ)</label>
                  </div>
                </> : templateSel === "plugin" ? <>
                  <div className="choice" id="pocketmine" onClick={() => setPlatformSel("pocketmine")}>
                    <h3>PocketMine</h3>
                    <label>(ลง plugin ได้แต่เรื่องของการเซ็ตจะยากหน่อย)</label>
                  </div>
                  <div className="choice" id="nukkitX" onClick={() => setPlatformSel("nukkitX")}>
                    <h3>NukkitX</h3>
                    <label>(ลง plugin ได้ ใช้ภาษาเขียน plugin แบบเดียวกับ Minecraft Java)</label>
                  </div>
                </> : null

              ) : (
                <>
                  <div className="choice" id="geyser" onClick={() => setPlatformSel("geyser")}>
                    <h3>GeyserMC</h3>
                    <label>(มีเจ้าเดียวล่ะ จะเลือกอะไรล่ะ Minecraft PE / Win 10 เข้าได้ทั้งแต่ 1.17.0 - ล่าสุด)</label>
                  </div>
                </>
              )
            }
          </div>
          <br />
          <section className="btn-section">
            <a href="#summary" className='btn btn-next'><i className="bi bi-arrow-right"></i>{" "}ต่อไป (สรุปผลและทำให่้เสร็จ)</a>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="page summary" id="summary">
          {editionSel}
          <br />
          {versionSel}
          <br />
          {templateSel}
          <br />
          {platformSel}
          <div className="container">
            <label htmlFor="minram">แรมที่ให้เซิฟใช้เป็นอย่างต่ำ (หน่วยเป็น GB)</label>
            <input type="number" id="minram" className='minram' placeholder={editionSel === "bedrock" ? "คุณไม่สามารถแก้ไขได้เนื่องจากทางเรายังทำระบบนี้ไม่เสร็จ" : "แรมที่ให้เซิฟใช้เป็นอย่างต่ำ"} value={editionSel === "bedrock" ? "คุณไม่สามารถแก้ไขได้เนื่องจากทางเรายังทำระบบนี้ไม่เสร็จ" : ramMinUsage / 1024} onChange={e => setRunCode("min", e.target.value)} disabled={editionSel === "bedrock" ? true : false} />
            <br />
            <label htmlFor="maxram">แรมที่ให้เซิฟใช้มากที่สุด (หน่วยเป็น GB)</label>
            <input type="number" id="maxram" className='maxram' placeholder={editionSel === "bedrock" ? "คุณไม่สามารถแก้ไขได้เนื่องจากทางเรายังทำระบบนี้ไม่เสร็จ" : "แรมที่ให้เซิฟใช้เป็นอย่างต่ำ"} value={editionSel === "bedrock" ? "คุณไม่สามารถแก้ไขได้เนื่องจากทางเรายังทำระบบนี้ไม่เสร็จ" : ramMaxUsage / 1024} onChange={e => setRunCode("max", e.target.value)} disabled={editionSel === "bedrock" ? true : false} />
            <label htmlFor="code">นี่คือโค๊ดที่จะ run เซิฟของคุณ (ไม่จำเป็นต้องแก้ไข)</label>
            <input type="text" id="code" value={editionSel === "bedrock" ? "คุณไม่สามารถแก้ไขได้เนื่องจากทางเรายังทำระบบนี้ไม่เสร็จ" : codeRunServer} placeholder={editionSel === "bedrock" ? "คุณไม่สามารถแก้ไขได้เนื่องจากทางเรายังทำระบบนี้ไม่เสร็จ" : "โค๊ดของคุณ"} onChange={e => setCodeRunServer(e.target.value)} className='code' disabled={editionSel === "bedrock" ? true : false} />
            <hr />
            <h1>สรุป...</h1>
            <div className="row cardrow flex">
              <div className="card info">
                <i className="bi bi-memory bigicon"></i>
                <br />
                <label>แรมที่ให้เซิฟใช้เป็นอย่างต่ำ</label>
                <h1>{ramMinUsage / 1024}GB</h1>
              </div>

              <div className="card info">
                <i className="bi bi-memory bigicon"></i>
                <br />
                <label>แรมที่ให้เซิฟใช้มากที่สุด</label>
                <h1>{ramMaxUsage / 1024}GB</h1>
              </div>

              <div className="card info">
                <i className="bi bi-joystick bigicon"></i>
                <br />
                <label>รุ่นของ Minecraft</label>
                <h1>{editionSel === "bedrock" ? "Pocket / Win 10 Edition"
                : editionSel === "java" ? "Java Edition" 
                : editionSel === "both" ? "Java Edition และ Pocket / Win 10 Edition พร้อมกัน"
                : "ไม่ได้ระบุ โปรด refresh หน้าเว็บอีกครั้ง"
              }</h1>
              </div>
              <div className="card info">
                <i className="bi bi-file-binary bigicon"></i>
                <br />
                <label>เวอร์ชั่น Minecraft</label>
                <h1>{versionSel}{editionSel === "both" ? " (Java) / 1.17.0 - ปัจจุบัน (PE/Win 10)" : null}</h1>
              </div>
              
              <div className="card info">
                <i className="bi bi-archive-fill bigicon"></i>
                <br />
                <label>เปิดเซิฟแบบ</label>
                <h1>{templateSel === "java-template" ? "Minecraft ทั่วไป" : 
                  templateSel === "plugin" ? "ลง Plugin ได้" :
                  templateSel === "mods" ? "ลง Mods ได้" : "ไม่ได้ระบุ โปรด refresh หน้าเว็บอีกครั้ง"
                }</h1>
              </div>

              <div className="card info">
                <i className="bi bi-app bigicon"></i>
                <br />
                <label>เปิดด้วย</label>
                <h1>{platformSel === "java-platform" ? "ตัวเปิดเซิฟของ Minecraft" : 
                  platformSel === "spigot" ? "SpigotMC" :
                  platformSel === "paper" ? "PaperMC" : 
                  platformSel === "forge" ? "Forge" :
                  platformSel === "fabric" ? "Fabric" :
                  platformSel === "minecraft" ? "ตัวเปิดเซิฟของ Minecraft" :
                  platformSel === "pocketmine" ? "PocketMine" :
                  platformSel === "nukkitX" ? "NukkitX" : 
                  platformSel === "geyser" ? "GeyserMC" :
                  "ไม่ได้ระบุ โปรด refresh หน้าเว็บอีกครั้ง"
                }</h1>
              </div>
              
            </div>
            <hr />
          </div>
          <div className="container">
            <h1>ขั้นตอนการติดตั้ง</h1>
            <li>ติดตั้ง Java {versionSel >= 18 
            ? 
            "17" 
            : 
            versionSel <= 17.1 || versionSel >= 16 
            ? 
            "16" 
            : 
            "8"} 
            ผ่านลิงค์นี้ {" "}
            <a target="_blank" rel="noreferrer"
            href={versionSel >= 18 
            ? 
            "https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" 
            : 
            versionSel <= 17.1 || versionSel >= 16 
            ? 
            "https://www.oracle.com/java/technologies/javase/jdk16-archive-downloads.html" 
            : 
            "https://www.java.com/en/download/manual.jsp"}
            >
            {/* TEXT APPEAR */}
            
            {versionSel >= 18 
            ? 
            "https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" 
            : 
            versionSel <= 17.1 || versionSel >= 16 
            ? 
            "https://www.oracle.com/java/technologies/javase/jdk16-archive-downloads.html" 
            :
            "https://www.java.com/en/download/manual.jsp"}
            </a>
            </li>
            <li>ทำการติดตั้ง Java ให้เรียบร้อย โดย double click ไปที่ไฟล์ java ที่เราโหลดมา</li>
            <li>ดาวโหลดไฟล์ zip จากปุ่มนี้</li>
            <li>แตกไฟล์ออกและเข้าไปใน Folder</li>
            <li>จะเห็นว่ามีไฟล์ server.jar และ run.bat อยู่ ซึ่ง server นี้จะทำการกำหนดการใช้แรมตามที่คุณได้กรอกไว้!</li>
            <li>ทำการ double click ไปที่ run.bat เพื่อรัน server เราเลยยย</li>
          </div>
          <br /><br /><br />
      </section >

  <Footer />
    </div >
  )
}

export default Home
