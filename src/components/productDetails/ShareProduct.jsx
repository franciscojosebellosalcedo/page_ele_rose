import React, { useState } from 'react';
import { Modal, Button, Tooltip, Space } from 'antd';
import {
	FacebookOutlined, WhatsAppOutlined, TwitterOutlined, ShareAltOutlined,
  LinkedinOutlined, PinterestOutlined, InstagramOutlined, RedditOutlined
 } from '@ant-design/icons';

const ShareProduct = () => {
  const [visible, setVisible] = useState(false);
  const productUrl = window.location.href;

  const shareOptions = [
    {
      name: 'Facebook',
      icon: <FacebookOutlined />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppOutlined />,
      url: `https://wa.me/?text=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'Twitter',
      icon: <TwitterOutlined />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinOutlined />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'Pinterest',
      icon: <PinterestOutlined />,
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'Instagram',
      icon: <InstagramOutlined />,
      url: `https://www.instagram.com/?url=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'Reddit',
      icon: <RedditOutlined />,
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(productUrl)}`,
    },
  ];

  const handleShareClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
        <Button
					className='hover-button'
          icon={<ShareAltOutlined />}
          onClick={() => setVisible(true)}
        >
          Compartir
        </Button>
      <Modal
        title="Comparte este producto"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Space size="large">
          {shareOptions.map((option) => (
            <Tooltip key={option.name} title={`Compartir en ${option.name}`}>
              <Button
							className='hover-button'
                shape="circle"
                icon={option.icon}
                onClick={() => handleShareClick(option.url)}
              />
            </Tooltip>
          ))}
        </Space>
      </Modal>
    </>
  );
};

export default ShareProduct;
