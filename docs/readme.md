从官方导入过来，经过修改已经编译通过。

简介：现在这套代码已经有几个项目都在使用了，主要用于各项目组间统一开发规范，便于开发人员调整，以及新手快速熟悉项目，支持Egret2.0.x和2.5.x版本，此项目代码适用于中大型的项目，如果是小游戏用这个就有点复杂了

             包含内容(core)：
             1:MVC模块：(controller、view、model、proxy)模块与模块之间，模块内部通信，都使用自定义消息机制
             2:Net网络请求模块(Http、WebSocket)，WebSocket支持ProtoBuf，Utf，不同协议解析只需要继承基类后实现decode\encode函数即可

             3:Utils工具类，各种工具类，不断的填充
                1) AllAsyncExecutor，并行执行一大堆函数
                2) AnchorUtil，在Egret中已经没有anchorX、anchorY，可用此类实现同等功能
                3) ArrayUtils，对Array的操作处理
                4) AverageUtils，主要用于在不同帧存储不同数据，计算平均数，多用于基于时间差的功能的平滑性处理 
                5) DateUtils，时间格式化工具类
                6) DebugUtils，调试用工具类
                7) DelayOptManager，分帧计算工具类
                8) DeviceUtils，设备工具类
                9) DisplayUtils，DisplayObject操作类
               10) EffectUtils，效果工具类
               11) FrameDelay，帧延迟处理
               12) FrameExecutor，分帧处理，自定义间隔帧数
               13) KeyboardUtils，键盘事件处理类
               14) LocationProperty，浏览器地址栏参数处理类
               15) Log，封装console.log，便于正式上线时，关闭所有log输出
               16) MathUtils，数学计算工具类
               17) md5，md5加密类
               18) MessageCenter，用于接收服务端消息，包含分帧处理，防止某一消息性能低下，造成明显卡顿
               19) ObjectPool，对象池类
               20) Percent，百分比类
               21) QueueExecutor,  执行队列处理，用于处理有一大堆需要排队处理的函数
               22) RandomUtils，随机数工具类
               23) RenderTextureManager，cacheAsBitmap的替代方案，解决QQ浏览器在1G内存的机器上最多能使用20个Canvas的限制
               24) ResourceUtils，资源加载工具类，对RES模块的封装，支持使用多个resource.json，防止项目组多成员操作同一个文件时引起svn冲突
               25) ResVersionManager，单一资源通过版本号加载管理类
               26) RockerUtils，摇杆控制类
               27) ShockUtils，震屏类
               28) StageUtils，stage操作类
               29) StringBuffer，字符串拼接类，使用str+str的方式在js中比较低能
               30) StringUtils，字符串操作工具类
               31) TextFlowMaker，用于处理策划配置的html文本
               32) TimerManager，通用的基于时间、帧频的定时器处理，建议在项目所有的定时任务都使用此类，便于查找代码性能瓶颈
             4:StarlingSwf模块，可使用StarlingSwf来制作UI或动画
             5:Scene模块，一个简单的Scene管理切换代码
             6:dragonBones动画模块，使用dragonBones制作动画，支持当一个fla比较大时，可拆分为多个fla进行导出，生成DragonBonesArmatureContainer
             7:Sound音乐、音效模块，一个方面使用的音乐管理模块，支持音乐文件的缓存定时清理
             8:资源加载按照单一文件版本号的形式加载，scripts文件中为通过svn中文件版本号生成配置
             9:支持将多个json文件合并为一个文件进行加载使用，使用方式不变，依然通过Res.GetRes

             项目代码中有两个Demo，在example文件夹下
             1：GUITest，一个类似农场的gui的demo，用于演示mvc
             2：ActTest，一个格斗类游戏demo，用于演示dragonBones的动画处理、及其他相关代码

             有兴趣的同学可以一块交流下
