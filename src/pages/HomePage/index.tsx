import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import styles from './index.less'

const skills = [
  {
    title: 'React & UmiJS',
    description:
      '深入掌握组件化开发，熟悉 Hooks 和 Context API，利用 UmiJS 构建高效、模块化的应用架构。'
  },
  {
    title: '数据可视化',
    description:
      '精通 antV 和 echarts，能够实现复杂的交互式图表和动态数据更新，例如自定义图表组件和实时数据流处理。'
  },
  {
    title: '拖拽功能',
    description: '成功实现拖拽功能，包括拖拽排序、区域选择等，优化用户交互体验。'
  },
  {
    title: '前端优化',
    description: '实施代码拆分、懒加载和前端缓存策略，将页面加载速度提升 50%，显著改善用户体验。'
  },
  {
    title: '全栈工具',
    description: '熟练使用 Webpack、Babel、NPM 进行项目构建和依赖管理，编写高效的自动化构建脚本。'
  },
  {
    title: '测试驱动开发',
    description:
      '使用 Jest 和 React Testing Library 编写单元测试和集成测试，确保代码质量和应用稳定性。'
  }
]

const HomePage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  })

  return (
    <div className={styles.container}>
      <animated.div style={props} className={styles.backgroundAnimation} />
      {/* 个人信息 */}
      <section className={styles.section}>
        <h1 className={styles.name}>张五一</h1>
        <p className={styles.contact}>电话: 191-4350-9266</p>
        <p className={styles.contact}>邮箱: 982936872@qq.com</p>
      </section>

      {/* 个人简介 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>个人简介</h2>
        <p className={styles.text}>
          我是一名前端开发工程师，专注于构建现代、响应式和高性能的Web应用。拥有一年实战经验，精通
          React 和 UmiJS，擅长使用 antV 和 echarts
          实现动态数据可视化，并在拖拽功能开发方面积累了丰富经验。热爱挑战复杂的技术问题，致力于通过技术创新提升用户体验。
        </p>
      </section>

      {/* 技能亮点 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>技能亮点</h2>
        <div className={styles.cardContainer}>
          {skills.map(skill => (
            <div key={skill.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardDescription}>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 工作经验 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>工作经验</h2>
        <div>
          <h3 className={styles.jobTitle}>前端开发工程师</h3>
          <p className={styles.jobCompany}>悉望数智 | 2023年6月 - 至今</p>
          <ul className={styles.list}>
            <li>
              🔥 **开发全新数据管理平台**: 领导开发基于 React 和 UmiJS 的数据管理平台，集成了 antV
              和 echarts，提供实时数据更新和复杂的图表交互。
            </li>
            <li>
              🔍 **优化性能**: 通过前端性能优化技术，减少了页面加载时间
              30%，提升了用户体验和系统响应速度。
            </li>
            <li>
              🎯 **实现高级拖拽功能**:
              开发了一套高级拖拽组件，包括拖拽排序和区域选择，极大地增强了用户交互体验。
            </li>
            <li>
              🛠️ **工具链改进**: 升级项目工具链，使用 Webpack
              进行高效的模块打包，改善了开发效率和构建性能。
            </li>
          </ul>
        </div>
      </section>

      {/* 教育背景 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>教育背景</h2>
        <div>
          <h3 className={styles.educationTitle}>软件工程</h3>
          <p className={styles.educationSchool}>浙江科技大学 | 2019年9月 - 2023年6月</p>
        </div>
      </section>

      {/* 项目展示 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>项目展示</h2>
        <div>
          <h3 className={styles.projectTitle}>数据管理系统</h3>
          <p className={styles.text}>
            🌟 **关键项目**: 开发并维护数据管理系统，集成 antV 和 echarts
            实现复杂的数据可视化。优化了系统性能，支持实时数据流和动态图表更新。
          </p>
        </div>
        <div>
          <h3 className={styles.projectTitle}>数据可视化平台</h3>
          <p className={styles.text}>
            🌟 **炫酷功能**: 开发了基于 antV 和 echarts
            的数据可视化平台，支持多种图表类型和自定义展示，提供了丰富的用户交互功能和实时数据更新。
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
