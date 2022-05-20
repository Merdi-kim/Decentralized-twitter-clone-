import styles from '../styles/SidebarOption.module.css'

function SidebarOption({active,text, Icon}) {

  return (
    <div className={`${styles.sidebarOption} ${active && styles.active}`}>
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption